// https://calculator.swiftutors.com/electrical-conductivity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const electricalConductivityRadio = document.getElementById('electricalConductivityRadio');
const currentRadio = document.getElementById('currentRadio');
const lengthRadio = document.getElementById('lengthRadio');
const voltageRadio = document.getElementById('voltageRadio');
const crosssectionalAreaRadio = document.getElementById('crosssectionalAreaRadio');

let electricalConductivity;
let current = v1;
let length = v2;
let voltage = v3;
let crosssectionalArea = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

electricalConductivityRadio.addEventListener('click', function() {
  variable1.textContent = '(I) Current (amps)';
  variable2.textContent = '(L) Length (m)';
  variable3.textContent = '(V) Voltage (v)';
  variable4.textContent = '(A) Cross-sectional Area (m²)';
  current = v1;
  length = v2;
  voltage = v3;
  crosssectionalArea = v4;
  result.textContent = '';
});

currentRadio.addEventListener('click', function() {
  variable1.textContent = '(σ) Electrical Conductivity (Ω⁻¹ m⁻¹)';
  variable2.textContent = '(L) Length (m)';
  variable3.textContent = '(V) Voltage (v)';
  variable4.textContent = '(A) Cross-sectional Area (m²)';
  electricalConductivity = v1;
  length = v2;
  voltage = v3;
  crosssectionalArea = v4;
  result.textContent = '';
});

lengthRadio.addEventListener('click', function() {
  variable1.textContent = '(σ) Electrical Conductivity (Ω⁻¹ m⁻¹)';
  variable2.textContent = '(I) Current (amps)';
  variable3.textContent = '(V) Voltage (v)';
  variable4.textContent = '(A) Cross-sectional Area (m²)';
  electricalConductivity = v1;
  current = v2;
  voltage = v3;
  crosssectionalArea = v4;
  result.textContent = '';
});

voltageRadio.addEventListener('click', function() {
  variable1.textContent = '(σ) Electrical Conductivity (Ω⁻¹ m⁻¹)';
  variable2.textContent = '(I) Current (amps)';
  variable3.textContent = '(L) Length (m)';
  variable4.textContent = '(A) Cross-sectional Area (m²)';
  electricalConductivity = v1;
  current = v2;
  length = v3;
  crosssectionalArea = v4;
  result.textContent = '';
});

crosssectionalAreaRadio.addEventListener('click', function() {
  variable1.textContent = '(σ) Electrical Conductivity (Ω⁻¹ m⁻¹)';
  variable2.textContent = '(I) Current (amps)';
  variable3.textContent = '(L) Length (m)';
  variable4.textContent = '(V) Voltage (v)';
  electricalConductivity = v1;
  current = v2;
  length = v3;
  voltage = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(electricalConductivityRadio.checked)
    result.textContent = `Electrical Conductivity = ${computeElectricalConductivity().toFixed(2)} Ω⁻¹ m⁻¹`;

  else if(currentRadio.checked)
    result.textContent = `Current = ${computeCurrent().toFixed(2)} amps`;

  else if(lengthRadio.checked)
    result.textContent = `Length = ${computeLength().toFixed(2)} m`;

  else if(voltageRadio.checked)
    result.textContent = `Voltage = ${computeVoltage().toFixed(2)} v`;

  else if(crosssectionalAreaRadio.checked)
    result.textContent = `Cross-sectional Area = ${computeCrosssectionalArea().toFixed(2)} m²`;
})

// calculation

function computeElectricalConductivity() {
  return (Number(current.value) * Number(length.value)) / (Number(voltage.value) * Number(crosssectionalArea.value));
}

function computeCurrent() {
  return (Number(electricalConductivity.value) * Number(voltage.value) * (Number(crosssectionalArea.value))) / Number(length.value);
}

function computeLength() {
  return (Number(electricalConductivity.value) * Number(voltage.value) * (Number(crosssectionalArea.value))) / Number(current.value);
}

function computeVoltage() {
  return (Number(current.value) * Number(length.value)) / (Number(electricalConductivity.value) * Number(crosssectionalArea.value));
}

function computeCrosssectionalArea() {
  return (Number(current.value) * Number(length.value)) / (Number(electricalConductivity.value) * Number(voltage.value));
}