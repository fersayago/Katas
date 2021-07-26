export class Auto {
  Marca: string;
  Modelo: string;
  Anio: number;
  Chasis: number;
  Encendido: boolean;
  Color: string;
  Velocidad: number;

  constructor(marca: string, modelo: string, anio: number, chasis: number, color: string, encendido: boolean = false){
    this.Marca = marca;
    this.Modelo = modelo;
    this.Anio = anio;
    this.Chasis = chasis;
    this.Color = color;
    this.Velocidad = 0;
    this.Encendido = encendido;
  }

  encender() : void {
    if (this.Encendido === false){
      // encendemos el auto
      this.Encendido = true;
      console.log(`Se ha encendido el ${this.Marca} ${this.Modelo}`);      
    }
    else {
      console.log(`${this.Marca} ${this.Modelo} ya estaba encendido`);
      
    }
  }

  apagar() : void {
    if (this.Encendido === false){
      console.log(`${this.Marca} ${this.Modelo} ya estaba apagado`);
    } 
    else{
      if (this.Velocidad > 0){
        console.log(`${this.Marca} ${this.Modelo} debe estar estatico para poder apagarse`);
      }
      else {
        this.Encendido = false;
        console.log(`${this.Marca} ${this.Modelo} se apago`);
      }      
    }
  }

  aumentarVelocidad() : void {
    if (this.Encendido === false) {
      console.log(`${this.Marca} ${this.Modelo} se encuentra apagado, favor de encender`);
    }
    else {
      if (this.Velocidad === 0){
      this.Velocidad += 5;
      console.log(`${this.Marca} ${this.Modelo} comienza su marcha a ${this.Velocidad} km/h`);
      }
      else if (this.Velocidad > 0){
        this.Velocidad += 5;
        console.log(`${this.Marca} ${this.Modelo} acelera a ${this.Velocidad} km/h`);
      }
    }
  }

  disminuirVelocidad() : void {
    if (this.Encendido === false) {
      console.log(`${this.Marca} ${this.Modelo} se encuentra apagado, favor de encender`);
    }
    else {
      if (this.Velocidad <= 5){
        this.Velocidad = 0;
        console.log(`${this.Marca} ${this.Modelo} detuvo su marcha`);
      }
      else if (this.Velocidad > 5){
        this.Velocidad -= 5;
        console.log(`${this.Marca} ${this.Modelo} disminuyo su velocidad a ${this.Velocidad} km/h`);
      }
    }
  }

  frenar() : void {
    if (this.Encendido === true && this.Velocidad > 0){
      this.Velocidad = 0;
      console.log(`${this.Marca} ${this.Modelo} detuvo su marcha`);
    }
    else {
      console.log(`${this.Marca} ${this.Modelo} esta apagado o ya se encuentra estatico`);
    }
  }

  velocimetro() : number {
    return this.Velocidad;     
  }

  informar(): void {
    console.log("-------------------------------------")
    console.log("Estado actual:")
    console.log(`Marca: ${this.Marca}`)
    console.log(`Modelo:  ${this.Modelo}`)
    console.log(`Año: ${this.Anio}`)
    console.log(`Encendido: ${this.Encendido}`)
    console.log(`Chasis: ${this.Chasis}`)
    console.log("-------------------------------------")
  };
}