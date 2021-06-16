const PORT = 5500;

function testing() {
  console.log("test");
}

export default function exportDefault() {
  console.log("export default from helper");
}

export { PORT, testing };
