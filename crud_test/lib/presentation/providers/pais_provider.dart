import 'package:crud_test/config/helpers/pais_information.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../domain/domain.dart';

final paisProvider = FutureProvider<List<Pais>>((ref) async {
  return ref.watch(paisProviderFinal).getAllPais();
});
