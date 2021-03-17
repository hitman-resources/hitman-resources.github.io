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

	document.getElementById("pops").innerHTML += `<div class="card">
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">Are you playing in Offline Mode? (this means turning off your internet before starting the game or declining the privacy policy)</p>
				</div>
			</div>
			<div class="buttons">
				<a class="button is-link" onclick="conflicts()">Yes</a>
				<a class="button is-link" onclick="offlineMode()">No</a>
			</div>
		</div>
	</div>`
}

function offlineMode() {
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

	document.getElementById("pops").innerHTML += `<div class="card">
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">Are you playing in Offline Mode? (this means turning off your internet before starting the game or declining the privacy policy)</p>
				</div>
			</div>
			<div class="buttons">
				<a class="button is-link" onclick="conflicts()">Yes</a>
				<a class="button is-link" onclick="offlineMode()">No</a>
			</div>
		</div>
	</div>
	<div class="card">
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">It's called Offline Experience Refined for a reason.</p>
				</div>
			</div>
		</div>
	</div>`
}

function conflicts() {
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

	document.getElementById("pops").innerHTML += `<div class="card">
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">Are you playing in Offline Mode? (this means turning off your internet before starting the game or declining the privacy policy)</p>
				</div>
			</div>
			<div class="buttons">
				<a class="button is-link" onclick="conflicts()">Yes</a>
				<a class="button is-link" onclick="offlineMode()">No</a>
			</div>
		</div>
	</div>
	<div class="card">
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">Are you using MK2 item replacements or Suit Replacement Mod?</p>
				</div>
			</div>
			<div class="buttons">
				<a class="button is-link" onclick="pleaseRemoveConflicts()">Yes</a>
				<a class="button is-link" onclick="complete()">No</a>
			</div>
		</div>
	</div>`
}

function pleaseRemoveConflicts() {
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

	document.getElementById("pops").innerHTML += `<div class="card">
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">Are you playing in Offline Mode? (this means turning off your internet before starting the game or declining the privacy policy)</p>
				</div>
			</div>
			<div class="buttons">
				<a class="button is-link" onclick="conflicts()">Yes</a>
				<a class="button is-link" onclick="offlineMode()">No</a>
			</div>
		</div>
	</div>
	<div class="card">
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">Are you using MK2 item replacements or Suit Replacement Mod?</p>
				</div>
			</div>
			<div class="buttons">
				<a class="button is-link" onclick="pleaseRemoveConflicts()">Yes</a>
				<a class="button is-link" onclick="complete()">No</a>
			</div>
		</div>
	</div>
	<div class="card">
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">Please remove these mods and try again.</p>
				</div>
			</div>
		</div>
	</div>`
}

function complete() {
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

	document.getElementById("pops").innerHTML += `<div class="card">
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">Are you playing in Offline Mode? (this means turning off your internet before starting the game or declining the privacy policy)</p>
				</div>
			</div>
			<div class="buttons">
				<a class="button is-link" onclick="conflicts()">Yes</a>
				<a class="button is-link" onclick="offlineMode()">No</a>
			</div>
		</div>
	</div>
	<div class="card">
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">Are you using MK2 item replacements or Suit Replacement Mod?</p>
				</div>
			</div>
			<div class="buttons">
				<a class="button is-link" onclick="pleaseRemoveConflicts()">Yes</a>
				<a class="button is-link" onclick="complete()">No</a>
			</div>
		</div>
	</div>
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