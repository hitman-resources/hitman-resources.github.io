function qm() {
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
				<a class="button is-link" onclick="basicComplete()">No</a>
			</div>
		</div>
	</div>`

	qm = true
}

function manual() {
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

	qm = false
}

function manualStart() {
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
	</div>
	<div class="card">
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
	</div>`
}

function pleasePatch() {
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
	</div>
	<div class="card">
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
					<p class="title is-4">Please open your packagedefinition.txt file (in Runtime) with <a href="https://notex.app/tools/online/xtea/">this tool</a>, click Set Patch Levels and save over your existing packagedefinition.</p>
				</div>
			</div>
		</div>
	</div>`
}

function renaming() {
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
	</div>
	<div class="card">
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
}

function pleaseRename() {
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
	</div>
	<div class="card">
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
	</div>
	<div class="card">
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">Please place the RPKG file in your Runtime folder and rename it to the next sequential chunk0 patch number - if you have chunk0.rpkg, name it chunk0patch1.rpkg or if you have chunk0patch1.rpkg, name it chunk0patch2.rpkg.</p>
				</div>
			</div>
		</div>
	</div>`
}

function pirate() {
	document.getElementById("pops").innerHTML += `
	<div class="card">
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">Please don't.</p>
				</div>
			</div>
		</div>
	</div>`
}