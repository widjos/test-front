import 'package:crud_test/domain/entities/pais.dart';
import 'package:crud_test/presentation/providers/pais_provider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

class PaisScreen extends ConsumerWidget {
  const PaisScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Paises'),
      ),
      body: const StreamView(),
      floatingActionButton: FloatingActionButton(
        onPressed: () => context.push('/pais_create'),
        child: const Icon(Icons.add),
      ),
    );
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

    return RefreshIndicator(
        child: Center(
          child: paisesExist.when(
            data: (data) {
              return ListView.builder(
                  itemCount: data.length,
                  itemBuilder: (context, index) {
                    final pais = data[index];
                    return ListTile(
                      leading: const Icon(
                        Icons.local_airport_outlined,
                        color: Colors.blue,
                        size: 40.0,
                      ),
                      title: Text(
                        pais.nombre,
                        style: const TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 18.0,
                        ),
                      ),
                      subtitle: Text(pais.codigo.toString()),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(45.0),
                        side: BorderSide(color: Colors.grey.shade300),
                      ),
                      contentPadding: EdgeInsets.all(16.0),
                      trailing: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          ElevatedButton(
                            onPressed: () => {},
                            // await ref
                            //             // .read(paisProviderNotifier.notifier)
                            //             // .createPais(nombre, int.parse(codigo));
                            // },
                            child: Icon(Icons.delete, color: Colors.red[600]),
                          ),
                        ],
                      ),
                    );
                  });
            },
            error: (error, stackTrace) => Text(error.toString()),
            loading: () => const CircularProgressIndicator(),
          ),
        ),
        onRefresh: () => ref.refresh(paisProvider.future));
  }
}
