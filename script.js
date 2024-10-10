// Initial array of artworks
const artworks = [
    {
        title: 'Mona Lisa',
        description: 'A painting by Leonardo da Vinci.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1920px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
    },
    {
        title: 'Modern Art',
        description: 'An artwork representing modern art.',
        image: 'https://highlightsofvisualarts.wordpress.com/wp-content/uploads/2015/04/222a-art.jpg',
    },
    {
        title: 'Seven Elements of Art',
        description: 'A painting demonstrating the elements of art.',
        image: 'https://artincontext.org/wp-content/uploads/2022/06/Painting-Demonstrating-the-Elements-of-Art.avif',
    },
    {
        title: 'The Life Tree',
        description: 'An artwork titled The Life Tree.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40K405SDZKdiiEQh8chEavVWpuNJhL1qmaA&s',
    },
    {
        title: 'The Scream',
        description: 'A painting by Edvard Munch.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/1920px-The_Scream.jpg',
    },
    {
        title: 'Starry Night',
        description: 'A painting by Vincent van Gogh.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
    },
    {
        title: 'The Persistence of Memory',
        description: 'A painting by Salvador Dalí.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/The_Persistence_of_Memory.jpg',
    },
    {
        title: 'Girl with a Pearl Earring',
        description: 'A painting by Johannes Vermeer.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Girl_with_a_Pearl_Earring.jpg',
    },
    {
        title: 'The Kiss',
        description: 'A painting by Gustav Klimt.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/The_Kiss_%28Gustav_Klimt%29.jpg',
    },
    {
        title: 'The Last Supper',
        description: 'A mural painting by Leonardo da Vinci.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Leonardo_da_Vinci_-_The_Last_Supper_%28restored%29.jpg',
    },
    {
        title: 'The Birth of Venus',
        description: 'A painting by Sandro Botticelli.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project.jpg',
    },
    {
        title: 'The Girl with the Balloon',
        description: 'A piece by Banksy.',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Banksy_Girl_with_a_Balloon.jpg/1920px-Banksy_Girl_with_a_Balloon.jpg',
    },
    {
        title: 'The Creation of Adam',
        description: 'A fresco by Michelangelo.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg',
    },
    {
        title: 'The Night Watch',
        description: 'A painting by Rembrandt.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Rembrandt_van_Rijn_-_De_nachtwacht_-_Google_Art_Project.jpg',
    },
    {
        title: 'The School of Athens',
        description: 'A fresco by Raphael.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Raphael_-_School_of_Athens_%28cropped%29.jpg',
    },
    {
        title: 'The Arnolfini Portrait',
        description: 'A painting by Jan van Eyck.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Jan_van_Eyck_-_Arnolfini_Portrait_%28cropped%29.jpg',
    },
    {
        title: 'Guernica',
        description: 'A painting by Pablo Picasso.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Pablo_Picasso_-_Guernica_%281934%29.jpg',
    },
];

// Array to store exhibitions
const exhibitions = [];

// Function to display artworks in the gallery
function displayArtworks(targetElementId) {
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
        targetElement.innerHTML = artworks.map(artwork => `
            <div class="artwork">
                <img src="${artwork.image}" alt="${artwork.title}">
                <h3>${artwork.title}</h3>
                <p>${artwork.description}</p>
            </div>
        `).join('');
    }
}

// Function to display exhibitions
function displayExhibitions() {
    const exhibitionList = document.getElementById('currentExhibitions');
    if (exhibitionList) {
        exhibitionList.innerHTML = exhibitions.map(exhibition => `
            <div class="exhibition">
                <h4>${exhibition.title}</h4>
                <p>Date: ${exhibition.date}</p>
                <p>${exhibition.description}</p>
                <img src="${exhibition.image}" alt="${exhibition.title}" style="max-width: 300px; height: auto;">
            </div>
        `).join('');
    }
}

// Admin functionality
const artworkForm = document.getElementById('artworkForm');
if (artworkForm) {
    artworkForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const title = document.getElementById('artworkTitle').value;
        const description = document.getElementById('artworkDescription').value;
        const image = document.getElementById('artworkImage').value;

        artworks.push({ title, description, image });
        displayCurrentArtworks();
        artworkForm.reset();
    });
}

// Function to display current artworks for admin
function displayCurrentArtworks() {
    displayArtworks('currentArtworks');
}

// Artist functionality
const uploadForm = document.getElementById('uploadForm');
if (uploadForm) {
    uploadForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const title = document.getElementById('artistArtworkTitle').value;
        const description = document.getElementById('artistArtworkDescription').value;
        const image = document.getElementById('artistArtworkImage').value;

        artworks.push({ title, description, image });
        displayArtistArtworks();
        uploadForm.reset();
    });
}

// Function to display artist artworks
function displayArtistArtworks() {
    displayArtworks('artistArtworks');
}

// Visitor functionality
const exploreArtworks = document.getElementById('exploreArtworks');
if (exploreArtworks) {
    exploreArtworks.innerHTML = artworks.map(artwork => `
        <div class="artwork">
            <img src="${artwork.image}" alt="${artwork.title}">
            <h3>${artwork.title}</h3>
            <p>${artwork.description}</p>
            <button onclick="purchaseArtwork('${artwork.title}')">Purchase</button>
        </div>
    `).join('');
}

// Function to handle artwork purchase
function purchaseArtwork(title) {
    alert(`You have purchased: ${title}`);
}

// Curator functionality
const exhibitionForm = document.getElementById('exhibitionForm');
if (exhibitionForm) {
    exhibitionForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const title = document.getElementById('exhibitionTitle').value;
        const date = document.getElementById('exhibitionDate').value;
        const description = document.getElementById('exhibitionDescription').value;
        const image = document.getElementById('exhibitionImage').value; // Get the image URL

        // Store exhibition details in the exhibitions array
        exhibitions.push({ title, date, description, image }); // Add the image to the object

        // Display current exhibitions
        displayExhibitions();
        exhibitionForm.reset();
    });
}

// Initial call to display artworks on the gallery page
displayArtworks('artworkList');
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        alert(`Navigating to ${link.textContent}`);
    });
});
