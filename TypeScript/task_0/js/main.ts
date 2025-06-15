interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Johnson",
  age: 22,
  location: "London"
};

const studentsList: Student[] = [student1, student2];

// Create table
const table = document.createElement("table");
const tbody = document.createElement("tbody");
table.appendChild(tbody);
document.body.appendChild(table);

// Add headers
const headerRow = document.createElement("tr");
const headers = ["First Name", "Location"];
headers.forEach(headerText => {
  const th = document.createElement("th");
  th.textContent = headerText;
  headerRow.appendChild(th);
});
tbody.appendChild(headerRow);

// Add student rows
studentsList.forEach(student => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});