export class Timer{
    initTime
    tick
    isActive = false
    intervalId

    constructor(tick){
        this.tick = tick;
    }

    start(){
        if(this.isActive)return;

        this.isActive = true;
        this.initTime = Date.now();
        this.intervalId = setInterval(()=>{
            const diff = Date.now() - this.initTime;
            const time = this.#convertMsToTime(diff);
            this.tick(time);
        }, 1000)
    }

    stop(){
        if(!this.isActive) return;
        this.isActive = false;
        clearInterval(this.intervalId);
    }

    #padTo2Digits(num) {
        return num.toString().padStart(2, '0');
      }
      
    #convertMsToTime(milliseconds) {
        let seconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
      
        seconds = seconds % 60;
        minutes = minutes % 60;
      
        // 👇️ If you don't want to roll hours over, e.g. 24 to 00
        // 👇️ comment (or remove) the line below
        // commenting next line gets you `24:00:00` instead of `00:00:00`
        // or `36:15:31` instead of `12:15:31`, etc.
        hours = hours % 24;
      
        return `${this.#padTo2Digits(hours)}:${this.#padTo2Digits(minutes)}:${this.#padTo2Digits(
          seconds,
        )}`;
      }
}