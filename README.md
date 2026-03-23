# TOTAL HELL AGONY ALL THIS HERE
/* Basic reset for the body to ensure full height and light background */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4; /* Light gray background seen in Image 3 */
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* Header Styles */
header {
    background: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    width: 100%;
}

/* Main Container Styles */
.container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

/* Text Block Styles */
.text-block {
    text-align: center;
    padding: 10px;
}

/* Image Styles */
img {
    margin-top: 15px;
    max-width: 400px;
    height: auto;
    border-radius: 8px;
}

/* Form Container Styles */
.form-container {
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    /* Optional: Adding a top border to separate it visually if needed */
    border-top: 1px solid #eee; 
    margin-top: 20px;
}

/* Input Field Styles */
input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box; /* Ensures padding doesn't widen the element */
}

/* Button Styles */
button {
    background-color: #333;
    color: white;
    cursor: pointer;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 1rem;
}

/* Footer Styles */
footer {
    text-align: center;
    padding: 1rem;
    background: #333;
    color: white;
    width: 100%;
    margin-top: auto; /* Pushes footer to the bottom if content is short */
}
