export interface Ingresos {
  ingresosId: number

  numeroHistorialClinicoPacientes: number
  nombrePacientes: string
  apellidoPacientes: string
  domicilioPacientes: string
  provinciaPacientes: string
  numeroTelefonoPacientes: number
  fechaNacimientoPacientes: string

  codigoMedicos: number
  nombresMedicos: string
  apellidosMedicos: string
  numeroTelefonoMedicos: number
  nombreEspecialidadMedicos: string
  cargoMedicos: string

  fechaIngreso: string
  condicion: string
  numeroCama: number
  observaciones: string

  dnipacientes: number
  dnimedicos: number
}
