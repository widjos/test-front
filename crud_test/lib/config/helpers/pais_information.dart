import 'dart:convert';

import 'package:crud_test/domain/domain.dart';
import 'package:crud_test/domain/entities/create_pais.dart';
import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class PaisInformation {
  Future<List<Pais>> getAllPais() async {
    final dio = Dio();

    await Future.delayed(const Duration(seconds: 2));
    try {
      final response = await dio.get('http://10.0.2.2:3333/pais');
      final List result = response.data;

      return result.map((e) => Pais.fromJson(e)).toList();
    } catch (e) {
      throw e;
    }
  }

  Future<Pais> createPais(String nombre, int codigo) async {
    final dio = Dio();

    // await Future.delayed(const Duration(seconds: 2));
    try {
      final response = await dio.post('http://10.0.2.2:3333/pais/create',
          data: {'nombre': nombre, 'codigo': codigo});
      final result = response.data;
      print(result);

      return Pais.fromJson(jsonDecode(result));
    } catch (e) {
      throw e;
    }
  }

  Future<String> deletePais(int pais_id) async {
    final dio = Dio();

    // await Future.delayed(const Duration(seconds: 2));
    try {
      final response = await dio.delete('http://10.0.2.2:3333/pais/${pais_id}');
      final result = response.data;
      print(result);

      return "Eliminado";
    } catch (e) {
      throw e;
    }
  }
}

final paisProviderFinal = Provider<PaisInformation>((ref) => PaisInformation());
