function basicComplete() {
	document.getElementById("pops").innerHTML = `
	<div class="card">
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">Have you pirated the game?</p>
				</div>
			</div>
			<div class="buttons">
				<a class="button is-link" onclick="pirate()">Yes</a>
				<a class="button is-link" onclick="manualStart()">No</a>
			</div>
		</div>
	</div>`

	if (!qm) document.getElementById("pops").innerHTML += `<div class="card">
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">Have you patched your packagedefinition.txt? If you don't know what this means, click No.</p>
				</div>
			</div>
			<div class="buttons">
				<a class="button is-link" onclick="renaming()">Yes</a>
				<a class="button is-link" onclick="pleasePatch()">No</a>
			</div>
		</div>
	</div>
	<div class="card">
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">Have you placed the RPKG file into the Runtime folder and renamed it to chunk0patch1.rpkg, chunk0patch2.rpkg, chunk0patch3.rpkg, etc?</p>
				</div>
			</div>
			<div class="buttons">
				<a class="button is-link" onclick="basicComplete()">Yes</a>
				<a class="button is-link" onclick="pleaseRename()">No</a>
			</div>
		</div>
	</div>`

	document.getElementById("pops").innerHTML += `
	<div class="card">
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">Everything should work. Contact Atampy26 on Hitman Forum if the mod continues to not work.</p>
				</div>
			</div>
		</div>
	</div>`
}