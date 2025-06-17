import confetti from 'canvas-confetti'

export default function showConfetti() {

    const defaults = {
        origin: { y: 0.7 },
        spread: 90,
        ticks: 60,
        zIndex: 999
    }

    const shoot = () => {
        confetti({
            ...defaults,
            particleCount: 50,
            angle: 60,
            startVelocity: 45,
            colors: ['#00C9A7', '#FEE440', '#FF006E', '#8338EC', '#3A86FF'],
        })

        confetti({
            ...defaults,
            particleCount: 70,
            angle: 120,
            startVelocity: 55,
            scalar: 1.2,
            colors: ['#FB5607', '#FFBE0B', '#9B5DE5', '#00F5D4'],
        });

        confetti({
            ...defaults,
            particleCount: 60,
            angle: 90,
            startVelocity: 35,
            scalar: 0.9,
            colors: ['#ffffff', '#aaaaaa', '#dddddd'],
        });
    }

    shoot()

    setTimeout(() => {
        shoot()
    }, 300);

    setTimeout(() => {
        shoot()
    }, 700);








}