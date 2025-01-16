import 'package:crud_test/config/helpers/pais_information.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../domain/domain.dart';

final paisProvider = FutureProvider<List<Pais>>((ref) async {
  return ref.watch(paisProviderFinal).getAllPais();
});

final paisProviderNotifier = StateNotifierProvider<PaisNotifier, Pais?>((ref) {
  return PaisNotifier(ref.read(paisProviderFinal));
});

class PaisNotifier extends StateNotifier<Pais?> {
  final PaisInformation paisInformation;

  PaisNotifier(this.paisInformation) : super(null);

  Future<void> createPais(String nombre, int codigo) async {
    try {
      final user = await paisInformation.createPais(nombre, codigo);
      print(user);
      state = user;
    } catch (e) {
      state = null;
    }
  }

  Future<dynamic> deletePais(int pais_id) async {
    try {
      final info = await paisInformation.deletePais(pais_id);
      return info;
    } catch (e) {
      throw e;
    }
  }
}
