const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');

const totalSeat = document.getElementById('seats-count');
const total = document.getElementById('total');

const movieSelect = document.getElementById('movie-option');
let ticketPrice = +movieSelect.value;

let counter = 0;




function updateSeat(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsLength = selectedSeats.length;

    totalSeat.innerText = selectedSeatsLength;
    
    total.innerText = selectedSeatsLength * ticketPrice;
}

movieSelect.addEventListener('change', (e)=>{
    const newPrice= +e.target.value;
    ticketPrice = newPrice;
    updateSeat() 
}
)


container.addEventListener('click', (e) =>{
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
    }

    updateSeat(seats);
});

