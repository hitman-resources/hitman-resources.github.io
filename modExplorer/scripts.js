async function execute() {
	mods = await (await fetch("https://hitman-resources.github.io/quickmod/mods.json?dummy=" + Date.now())).json()

	var modIndex = 0
	for (mod of mods) {
		document.getElementById("mods").innerHTML += `<div class="column is-one-quarter">
												<div class="card">
													<div class="card-image">
														<figure class="image is-4by3">
															<img src="https://hitman-resources.github.io/quickmod/mods/${modIndex}.png" alt="">
														</figure>
													</div>
													<div class="card-content">
														<div class="media">
															<div class="media-content">
																<p class="title is-4">${mod.name}</p>
																<p class="subtitle is-6">${mod.description}</p>
																<p><i>By ${mod.author}</i></p>
															</div>
														</div>
														<div class="buttons">
															<a class="button is-link" href="https://hitman-resources.github.io/quickmod/mods/${modIndex}.h2mod">Download (h2mod)</a>
														</div>
													</div>
												</div>
											</div>`

		modIndex += 1
	}
}

execute()