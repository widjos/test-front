import 'package:crud_test/domain/entities/pais.dart';
import 'package:crud_test/presentation/providers/pais_provider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class PaisScreen extends ConsumerWidget {
  const PaisScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Paises'),
        ),
        body: StreamView());
  }
}

class StreamView extends ConsumerWidget {
  const StreamView({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final paisesExist = ref.watch(paisProvider);

    if (!paisesExist.hasValue == null) {
      return const Center(child: CircularProgressIndicator());
    }

    return Center(
      child: paisesExist.when(
        data: (data) {
          List<Pais> paisList = data.map((e) => e).toList();
          return ListView.builder(
              itemCount: paisList.length,
              itemBuilder: (_, index) {
                return ListTile(
                  title: Text(paisList[index].nombre),
                );
              });
        },
        error: (error, stackTrace) => Text(error.toString()),
        loading: () => const CircularProgressIndicator(),
      ),
    );
  }
}
