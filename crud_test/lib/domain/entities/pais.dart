import 'dart:ffi';

class Pais {
  final int paisId;
  final String nombre;
  final int? codigo;

  Pais({
    required this.paisId,
    required this.nombre,
    required this.codigo,
  });

  factory Pais.fromJson(Map<String, dynamic> json) {
    return Pais(
        paisId: json['pais_id'],
        nombre: json['nombre'],
        codigo: json['codigo']);
  }

  Map<String, dynamic> toJson() =>
      {"pais_id": paisId, "nombre": nombre, "codigo": codigo};

  Pais copyWith({
    int? paisId,
    String? nombre,
    int? codigo,
  }) =>
      Pais(
        paisId: paisId ?? this.paisId,
        nombre: nombre ?? this.nombre,
        codigo: codigo,
      );
}
