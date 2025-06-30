import Engine from "../RandomizerEngine.js";
const engine = new Engine();
async function loadGenerators() {
  const res = await fetch("/generators/example.json");
  const spec = await res.json();
  engine.loadedGenerators.set(spec.name, spec);
  engine.selectGenerator(spec.name);
  const sel = document.getElementById("generatorSelect");
  const opt = document.createElement("option");
  opt.value = spec.name;
  opt.textContent = spec.name;
  sel.appendChild(opt);
}
loadGenerators();
document.getElementById("generate").addEventListener("click", () => {
  document.getElementById("output").textContent = engine.generate();
});
