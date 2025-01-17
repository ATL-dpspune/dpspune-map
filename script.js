const initialLocationDropdown = document.getElementById('initialLocation');
        const buildingDropdown = document.getElementById('building');
        const imageDisplay = document.getElementById('imageDisplay');
        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('modalImage');

        // Image mapping based on combinations
        const imageMapping = {
            "Building No. 4-Building 7&8": "4 TO 7&8.png",
            "Building No. 5-Building 7&8": "5 TO 7&8.png",
            "Building No. 6-Building 7&8": "6 TO 7&8.png",
            "Basketball Court-Building 7&8": "BASKETBALL TO 7&8.png",
            "Reception-Building 7&8": "RECEPTION TO BULDING 7 & 8.png"
        };

        function updateImage() {
            const initialLocation = initialLocationDropdown.value;
            const building = buildingDropdown.value;
            const combinationKey = `${initialLocation}-${building}`;

            // Display the corresponding image if available
            const imageSrc = imageMapping[combinationKey];
            if (imageSrc) {
                imageDisplay.innerHTML = `<img src="${imageSrc}" alt="Location Image" class="clickable-image">`;
                const imageElement = imageDisplay.querySelector("img");
                imageElement.onclick = () => openModal(imageSrc);
            } else {
                imageDisplay.innerHTML = "";
            }
        }

        function openModal(imageSrc) {
            modal.style.display = "flex";
            modalImage.src = imageSrc;
        }

        // Close modal when clicked outside the image
        modal.onclick = function() {
            modal.style.display = "none";
        };

        // Update image when dropdowns change
        initialLocationDropdown.addEventListener('change', updateImage);
        buildingDropdown.addEventListener('change', updateImage);

        // Initialize the image display on page load
        window.onload = updateImage;