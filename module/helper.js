const PORT = 5500;

function testing() {
  console.log("testing");
}

function exportDefault() {
  console.log("exportDefault");
}
export default exportDefault;
export { PORT, testing };
