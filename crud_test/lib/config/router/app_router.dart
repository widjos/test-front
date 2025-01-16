import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:crud_test/presentation/screens/screens.dart';

final appRouteProvider = Provider<GoRouter>((ref) {
  return GoRouter(routes: [
    GoRoute(path: '/', builder: (context, state) => const HomeScreen()),
    GoRoute(
        path: '/empresa', builder: (context, state) => const EmpresaScreen()),
    GoRoute(
        path: '/employee', builder: (context, state) => const EmployeeScreen()),
    GoRoute(path: '/pais', builder: (context, state) => const PaisScreen()),
    GoRoute(
        path: '/pais_create',
        builder: (context, state) => const CreatePaisScreen())
  ]);
});
