class Game{
	constructor () {
		this.bg = {
			x: 0,
			y: 0,
			w: 1920, //resolusi gambar
			h: 600, //
		};
		
		this.asteroids = [];
	}
	
	animate (callback) {
		window.requestAnimationFrame(callback);
	}
	
	run () {
		this.generate();
		this.start();
	}
	
	generate () {
		this.generateAsteroids();
	}

	generateAsteroids(){
		// Bikin random angka dari 0 - ch ( 600 )
		let randomY = Math.abs(Math.floor(Math.random() * ch));
		this.asteroids.push(new Asteroid(cw, randomY, 50, 50));

		setTimeout(() => {this.generateAsteroids()}, 3000);

	}
	
	start () {
		this.animate( () => this.start () );
		cw = canvas.width = 960;
		ch = canvas.height = 600;
		pen.clearRect(0, 0, cw, ch);

		this.draw();
		this.update();
	}
	
	draw () {
		this.drawBackground();
		pen.drawImage(media.plane, 10, (ch/2 - 25), 50, 50);

		this.asteroids.forEach(asteroid => {
			asteroid.draw();
		});
	}
	
	drawBackground(){
		this.bg.x -= 5;
		if (this.bg.x + this.bg.w <= cw){
			this.bg.x = 0;
		}

		pen.drawImage(
		media.bg,
		this.bg.x,
		this.bg.y,
		this.bg.w,
		this.bg.h,
		);
	}
	
	update () {

	}
}