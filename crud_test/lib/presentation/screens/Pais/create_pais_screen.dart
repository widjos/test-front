import 'package:crud_test/presentation/providers/pais_provider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class CreatePaisScreen extends ConsumerWidget {
  const CreatePaisScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final _nombreController = TextEditingController();
    final _codigoController = TextEditingController();

    return Scaffold(
      appBar: AppBar(title: const Text('Registrar Pais')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _nombreController,
              decoration: const InputDecoration(labelText: 'Nombre'),
            ),
            TextField(
              controller: _codigoController,
              decoration: const InputDecoration(labelText: 'Codigo'),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () async {
                final nombre = _nombreController.text;
                final codigo = _codigoController.text.toString();

                await ref
                    .read(paisProviderNotifier.notifier)
                    .createPais(nombre, int.parse(codigo));
              },
              child: const Text('Registrar'),
            ),
          ],
        ),
      ),
    );
    ;
  }
}
