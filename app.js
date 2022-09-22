const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');

const totalSeat = document.getElementById('seats-count');
const total = document.getElementById('total');

const movieSelect = document.getElementById('movie-option');
let ticketPrice = +movieSelect.value;


// const arr = [2,3,9]

// arr.forEach((item) =>{
//     console.log(seats[item].classList.add('selected'))
// })

function saveMovieData(item){
    localStorage.setItem('movieIndex', item.target.selectedIndex);
    localStorage.setItem('moviePrice', item.target.value);
}

function updateSeat(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsLength = selectedSeats.length;

    const seatIndex = [...selectedSeats].map(function(seat){
        return [...seats].indexOf(seat);
    }) 
    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));

    totalSeat.innerText = selectedSeatsLength;
    total.innerText = selectedSeatsLength * ticketPrice;
}


movieSelect.addEventListener('change', (e)=>{
    const newPrice= +e.target.value;
    ticketPrice = newPrice;
    updateSeat() 
    saveMovieData(e)
})


container.addEventListener('click', (e) =>{
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
    }

    updateSeat(seats);
});

