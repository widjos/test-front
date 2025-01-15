import 'package:flutter/material.dart';

class EmployeeScreen extends StatelessWidget {
  const EmployeeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Empleados'),
        ),
        body: const Center(
          child: CircularProgressIndicator(),
        ));
  }
}
