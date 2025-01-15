import 'package:flutter/material.dart';

class EmpresaScreen extends StatelessWidget {
  const EmpresaScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Empresas'),
        ),
        body: const Center(
          child: CircularProgressIndicator(),
        ));
  }
}
