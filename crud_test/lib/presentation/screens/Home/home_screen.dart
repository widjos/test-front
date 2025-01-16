import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Empleados y Empresas'),
        backgroundColor: Colors.greenAccent[500],
      ),
      body: const _HomeScreenView(),
    );
  }
}

class _HomeScreenView extends StatelessWidget {
  const _HomeScreenView();

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
          gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [Colors.purple, Colors.orange])),
      child: ListView(
        children: const [
          // _CustomListTile(
          //     title: 'Empresas',
          //     subTitle: 'Registro de Sus empresas',
          //     location: '/empresa'),
          // _CustomListTile(
          //     title: 'Empleados',
          //     subTitle: 'Registro de Sus Empleados',
          //     location: '/employee'),
          _CustomListTile(
              title: 'Paises',
              subTitle: 'Paises disponibles',
              location: '/pais'),
        ],
      ),
    );
  }
}

class _CustomListTile extends StatelessWidget {
  final String title;
  final String subTitle;
  final String location;

  const _CustomListTile({
    required this.title,
    required this.subTitle,
    required this.location,
  });

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(title,
          style: const TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 18.0,
              color: Colors.white)),
      subtitle: Text(
        subTitle,
        style: const TextStyle(color: Colors.amberAccent),
      ),
      trailing: const Icon(Icons.arrow_forward_ios_rounded),
      onTap: () => context.push(location),
    );
  }
}
