export const Students = [
  { name: "Sahil", class: "10th", status: "Active" },
  { name: "Chandani", class: "10th", status: "Active" },
  { name: "Suruchi", class: "10th", status: "Active" },
  { name: "Nikita", class: "10th", status: "Active" },
  { name: "Chitra", class: "9th", status: "Active" },
  { name: "Jyoti", class: "9th", status: "Active" },
  { name: "Hajra", class: "9th", status: "Active" },
  { name: "Jinnat", class: "9th", status: "Active" },
  { name: "Sumit", class: "9th", status: "Active" },
  { name: "Rohit", class: "9th", status: "Active" },
  { name: "Aarush", class: "9th", status: "Active" },
  { name: "Aditya", class: "9th", status: "Active" },
  { name: "Siya", class: "9th", status: "Active" },
  { name: "Varun", class: "9th", status: "Active" },
  { name: "Adit", class: "9th", status: "Inctive" },
  { name: "Sahil", class: "9th", status: "Active" },
].map((student) => ({
  ...student,
  image: {
    filename: "listingimage",
    url: `https://ui-avatars.com/api/?name=${student.name}`,
  },
}));
