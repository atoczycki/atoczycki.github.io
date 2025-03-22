document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const humility = parseInt(document.getElementById('humility').value);
    const zeal = parseInt(document.getElementById('zeal').value);
    const learning = parseInt(document.getElementById('learning').value);
    const pastor = parseInt(document.getElementById('pastor').value);

    // Weighting the factors (you can adjust these weights as necessary)
    const totalScore = (humility * 0.25) + (zeal * 0.25) + (learning * 0.25) + (pastor * 0.25);
    
    // Basic probability calculation (for simplicity, assume 100% is a perfect score)
    const probability = (totalScore / 40) * 100;
    
    // Display result
    document.getElementById('result').innerText = `Probability to become the next pope: ${probability.toFixed(2)}%`;
});
