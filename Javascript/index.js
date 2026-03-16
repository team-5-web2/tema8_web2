const params = new URLSearchParams(window.location.search);
const category = params.get("category");

console.log("Category:", category);
