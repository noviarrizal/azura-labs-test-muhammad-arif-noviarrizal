let selectedRow = null;

function onFormSubmit() {
	if (validate()) {
		let formData = readFormData();
		if (selectedRow == null) insertNewRecord(formData);
		else updateRecord(formData);
		resetForm();
	}
}

function readFormData() {
	let formData = {};
	formData["namaproduct"] = document.getElementById("namaproduct").value;
	formData["harga"] = document.getElementById("harga").value;
	return formData;
}

function insertNewRecord(data) {
	let table = document
		.getElementById("productList")
		.getElementsByTagName("tbody")[0];
	let newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.namaproduct;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.harga;
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
	document.getElementById("namaproduct").value = "";
	document.getElementById("harga").value = "";
	selectedRow = null;
}

function onEdit(td) {
	selectedRow = td.parentElement.parentElement;
	document.getElementById("namaproduct").value = selectedRow.cells[0].innerHTML;
	document.getElementById("harga").value = selectedRow.cells[1].innerHTML;
}
function updateRecord(formData) {
	selectedRow.cells[0].innerHTML = formData.namaproduct;
	selectedRow.cells[1].innerHTML = formData.harga;
}

function onDelete(td) {
	if (confirm("Are you sure to delete this record ?")) {
		row = td.parentElement.parentElement;
		document.getElementById("productList").deleteRow(row.rowIndex);
		resetForm();
	}
}
function validate() {
	isValid = true;
	if (document.getElementById("namaproduct").value == "") {
		isValid = false;
		document
			.getElementById("namaProductValidationError")
			.classList.remove("hide");
	} else {
		isValid = true;
		if (
			!document
				.getElementById("namaProductValidationError")
				.classList.contains("hide")
		)
			document
				.getElementById("namaProductValidationError")
				.classList.add("hide");
	}
	return isValid;
}
