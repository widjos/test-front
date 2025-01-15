import 'dart:ffi';

class Pais {
  final int id;
  final String nombre;
  final int? codigo;

  Pais({
    required this.id,
    required this.nombre,
    required this.codigo,
  });

  factory Pais.fromJson(Map<String, dynamic> json) {
    return Pais(
        id: json['pais_id'], nombre: json['nombre'], codigo: json['codigo']);
  }
  Pais copyWith({
    int? id,
    String? nombre,
    int? codigo,
  }) =>
      Pais(
        id: id ?? this.id,
        nombre: nombre ?? this.nombre,
        codigo: codigo,
      );
}
