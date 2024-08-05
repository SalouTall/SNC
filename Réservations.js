document.addEventListener('DOMContentLoaded', function() {
    toggleReservationDetails();

    const hotelSelect = document.getElementById('hotel');
    hotelSelect.addEventListener('change', updateHotelImage);
});

function toggleReservationDetails() {
    const typeSelect = document.getElementById('type');
    const hotelDetails = document.getElementById('hotel-details');
    const standDetails = document.getElementById('stand-details');

    if (typeSelect.value === 'hotel') {
        hotelDetails.classList.remove('hidden');
        standDetails.classList.add('hidden');
    } else {
        hotelDetails.classList.add('hidden');
        standDetails.classList.remove('hidden');
    }
}

function updateHotelImage() {
    const hotelSelect = document.getElementById('hotel');
    const hotelImage = document.getElementById('hotel-img');
    
    const hotelImages = {
        "HOTEL_WIFAMA": "hotel_wifama.jpg",
        "MERMOZ_HOTEL": "mermoz_hotel.jpg",
        "IBA_HOTEL": "iba_hotel.jpg",
        "AUBERGE_HOTEL": "auberge_hotel.jpg",
        "PACIFIQUE_HOTEL": "pacifique_hotel.jpg",
        "DIOULASSOBA_HOTEL": "dioulassoba_hotel.jpg"
    };
    
    const selectedHotel = hotelSelect.value;
    hotelImage.src = hotelImages[selectedHotel];
    hotelImage.style.display = 'block';
}
