class Producto {
    constructor(nombre, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }

    comprar(cantidad) {
        if (cantidad > this.cantidad) {
            return "Error: No hay suficientes unidades disponibles.";
        }
        this.cantidad -= cantidad;
        return `Compra realizada. Costo total: ${this.precio * cantidad}`;
    }

    reponer(cantidad) {
        this.cantidad += cantidad;
    }

    aplicarDescuento(porcentaje) {
        this.precio -= this.precio * (porcentaje / 100);
    }

    informacion() {
        return `Producto: ${this.nombre}, Precio: ${this.precio}, Cantidad: ${this.cantidad}, Categoría: ${this.categoria}`;
    }

    get agotado() {
        return this.cantidad === 0;
    }

    esPremium() {
        return this.precio > 100;
    }
}

let producto1 = new Producto("Teléfono", 300, 10, "Electrónica");
let producto2 = new Producto("Camiseta", 20, 50, "Ropa");
let producto3 = new Producto("Laptop", 800, 5, "Electrónica");
let producto4 = new Producto("Zapatos", 60, 20, "Ropa");
let producto5 = new Producto("Lechuga", 2, 100, "Alimentos");

producto1.IVA = 0.21;
producto1.calcularPrecioConIVA = function() {
    return this.precio * (1 + this.IVA);
};

let productos1 = [producto1, producto2, producto3, producto4, producto5];
let productos2 = [
    new Producto("Teclado", 50, 15, "Electrónica"),
    new Producto("Silla", 120, 8, "Muebles"),
    new Producto("Mesa", 200, 3, "Muebles"),
    new Producto("Monitor", 150, 7, "Electrónica"),
    new Producto("Manzanas", 3, 200, "Alimentos")
];

let productosTotal = [...productos1, ...productos2];
productosTotal.push(new Producto("Ratón", 25, 30, "Electrónica"));
productosTotal.unshift(new Producto("Auriculares", 80, 12, "Electrónica"));

function construirArray(...elementos) {
    return [...elementos];
}

function dividirArray(arr) {
    return [arr[0], arr.slice(1, -1), arr[arr.length - 1]];
}

let lechugaFind = productosTotal.find(p => p.nombre === "Lechuga");
let lechugaManual;
for (let p of productosTotal) {
    if (p.nombre === "Lechuga") {
        lechugaManual = p;
        break;
    }
}

productosTotal.reverse();
console.log(productosTotal);

productosTotal.sort((a, b) => a.precio - b.precio);

let productosOrdenadosNombre = [...productosTotal].sort((a, b) => a.nombre.localeCompare(b.nombre));

productosTotal.forEach(p => p.precio += 10);

let nombresProductos = productosTotal.map(p => p.nombre);