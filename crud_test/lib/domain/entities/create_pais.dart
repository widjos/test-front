import 'dart:ffi';

class CreatePais {
  final String nombre;
  final int? codigo;

  CreatePais({
    required this.nombre,
    required this.codigo,
  });

  factory CreatePais.fromJson(Map<String, dynamic> json) {
    return CreatePais(nombre: json['nombre'], codigo: json['codigo']);
  }

  Map<String, dynamic> toJson() => {"nombre": nombre, "codigo": codigo};

  CreatePais copyWith({
    String? nombre,
    int? codigo,
  }) =>
      CreatePais(
        nombre: nombre ?? this.nombre,
        codigo: codigo,
      );
}
