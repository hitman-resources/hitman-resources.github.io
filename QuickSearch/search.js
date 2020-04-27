repository_data = {}
sendRequest()

var fuse, searchTimer

async function sendRequest() {
    console.log("Loading REPO")
    response = await fetch("repo.txt")
    repository_data_p = await response.text()
    repository_data = JSON.parse(repository_data_p)
    console.log("Loaded REPO")
    var fuseOptions = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        minMatchCharLength: 1,
        keys: [
            "Title",
            "Name",
            "CommonName",
            "ID_"
        ]
    }
    fuse = new Fuse(repository_data, fuseOptions)
}

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase())
    }).join(' ')
}

displayCards = function (cards) {
        document.getElementById("cards").innerHTML = ''
        index = 0
        for (card of cards) {
            if (typeof card.item["Title"] != "undefined" && card.item["Title"] != "") {
                var title = card.item["Title"]
            } else {
                if (typeof card.item["CommonName"] != "undefined" && card.item["CommonName"] != "") {
                    var title = card.item["CommonName"]
                } else {
                    if (typeof card.item["Name"] != "undefined" && card.item["Name"] != "") {
                        var title = card.item["Name"]
                    } else {
                        var title = card.item["Name_LOC"]
                    }
                }
            }
            var type = "Unknown type"
            if (typeof card.item["IsHitmanSuit"] != "undefined") {
                type = "Outfit"
            } else if (typeof card.item["Outfit"] != "undefined") {
                type = "NPC"
            } else if (typeof card.item["CheatGroup"] != "undefined") {
                type = "Item"
            } else if (typeof card.item["Name_LOC"] != "undefined") {
                if (card.item.Name_LOC.includes("starting_location")) {
                    type = "Starting Location"
                }
            } else if (typeof card.item["Name_LOC"] != "undefined") {
                if (card.item.Name_LOC.includes("agencypickup") || card.item.Name_LOC.includes("agency_pickup")) {
                    type = "Agency Pickup"
                }
            } else if (typeof card.item["Name_LOC"] != "undefined") {
                if (card.item.Name_LOC.includes("challenge")) {
                    type = "Challenge"
                }
            }
                var features = ""
                if (typeof card.item["Features_"] != "undefined") {
                    if (card.item["Features_"].length == 1) {
                        var variation = titleCase(card.item["Features_"][0])
                        variation = variation == "Stingray" ? "NONE" : variation
                        variation = variation == "Raccoon" ? "NONE" : variation
                        if (variation != "NONE") {
                            features = ", featured in map variation " + variation
                        }
                    } else {
                        var variations = []
                        var doNotContinue = false
                        for (variation of card.item["Features_"]) {
                            variation = variation == "stingray" ? "NONE" : variation
                            variation = variation == "raccoon" ? "NONE" : variation
                            if (variation == "NONE") {
                                doNotContinue = true
                            }
                            variations.push(variation)
                        }
                        if (!doNotContinue) {
                            features = ", featured in map variations " + titleCase(card.item["Features_"].join(", "))
                        }
                    }
                }
                document.getElementById("cards").innerHTML += `<div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <div class="title is-4">
                            <p>${title} (${type}${features})</p>
                        </div>
                        <div class="subtitle is-5">
                            <p>${card.item["ID_"]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
            }
        }

        function search(term) {
            var results = fuse.search(term).slice(0, 20)
            displayCards(results)
            return results
        }

        function onSearchBarInput() {
            clearTimeout(searchTimer)
            searchTimer = setTimeout(function () {
                if (document.getElementById('searchBar').value != "") {
                    search(document.getElementById('searchBar').value)
                } else {
                    document.getElementById('cards').innerHTML = ""
                }
            }, 500)
        }