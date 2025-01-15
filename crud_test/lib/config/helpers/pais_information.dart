import 'dart:convert';
import 'dart:ffi';

import 'package:crud_test/domain/domain.dart';
import 'package:dio/dio.dart';
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
}

final paisProviderFinal = Provider<PaisInformation>((ref) => PaisInformation());
