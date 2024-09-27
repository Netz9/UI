'use client';

import { useEffect, useState } from 'react';
import { PlusIcon, PencilIcon, TrashIcon } from 'lucide-react';
import Link from 'next/link';
import { SVGProps } from 'react';

interface Student {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  direccion: string;
  fecha_nacimiento: string;
  carrera: string;
  semestre: number;
}

const EstudianteL = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newStudent, setNewStudent] = useState<Student | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/estudiantes');
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleModalEdit = async () => {
    if (newStudent) {
      try {
        let response;
        if (editingId) {
          // Update existing student
          response = await fetch(`http://127.0.0.1:8000/api/estudiantes/${editingId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newStudent),
          });
        } else {
          // Create new student
          response = await fetch('http://127.0.0.1:8000/api/estudiantes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newStudent),
          });
        }

        if (!response.ok) {
          throw new Error('Error al guardar el estudiante');
        }

        const savedStudent = await response.json();
        if (editingId) {
          // Update the student in the list
          setStudents(students.map(student => (student.id === editingId ? savedStudent : student)));
        } else {
          // Add the new student to the list
          setStudents([...students, savedStudent]);
        }

        setNewStudent(null);
        setEditingId(null);
        setIsModalOpen(false);
      } catch (error) {
        console.error('Error al guardar el estudiante:', error);
      }
    }
  };

  const handleEdit = (student: Student) => {
    setNewStudent(student);
    setEditingId(student.id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/estudiantes/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error deleting student');
      }

      // Remove the student from the list only after a successful delete
      setStudents(prevStudents => prevStudents.filter(student => student.id !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleCreate = () => {
    setNewStudent({
      id: -1,
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      direccion: '',
      fecha_nacimiento: '',
      carrera: '',
      semestre: 1,
    });
    setEditingId(null);
    setIsModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Student) => {
    if (newStudent) {
      setNewStudent({ ...newStudent, [field]: e.target.value });
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <aside className="sticky top-0 h-screen w-56 bg-white text-gray-800 p-4 border-r border-gray-300 shadow-lg">
        <div className="flex items-center mb-4 space-x-1">
          <img src="/acme2.png" width="200" height="60" alt="Company Logo" style={{ aspectRatio: "200/60", objectFit: "cover" }} />
        </div>
        <nav className="space-y-2">
          <Link href="/" passHref>
            <button className="w-full flex items-center space-x-2 hover:bg-gray-100 active:bg-gray-200 py-2 px-2 rounded-lg text-gray-500">
              <HomeIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Home</span>
            </button>
          </Link>
          <Link href="/view/estudiante" passHref>
            <button className="w-full flex items-center space-x-2 hover:bg-gray-100 active:bg-gray-200 py-2 px-2 rounded-lg text-gray-500">
              <UsersIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Estudiantes</span>
            </button>
          </Link>
        </nav>
      </aside>
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4">Gestión de Estudiantes</h1>
        <button onClick={handleCreate} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center">
          <PlusIcon className="mr-2 h-4 w-4" /> Agregar Estudiante
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">{editingId ? 'Editar Estudiante' : 'Agregar Estudiante'}</h2>
              <div>
                <input
                  type="text"
                  placeholder="Nombre"
                  value={newStudent?.nombre}
                  onChange={(e) => handleInputChange(e, 'nombre')}
                  className="border p-2 w-full mb-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  value={newStudent?.apellido}
                  onChange={(e) => handleInputChange(e, 'apellido')}
                  className="border p-2 w-full mb-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={newStudent?.email}
                  onChange={(e) => handleInputChange(e, 'email')}
                  className="border p-2 w-full mb-2 rounded"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  value={newStudent?.telefono}
                  onChange={(e) => handleInputChange(e, 'telefono')}
                  className="border p-2 w-full mb-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Dirección"
                  value={newStudent?.direccion}
                  onChange={(e) => handleInputChange(e, 'direccion')}
                  className="border p-2 w-full mb-2 rounded"
                />
                <input
                  type="date"
                  value={newStudent?.fecha_nacimiento}
                  onChange={(e) => handleInputChange(e, 'fecha_nacimiento')}
                  className="border p-2 w-full mb-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Carrera"
                  value={newStudent?.carrera}
                  onChange={(e) => handleInputChange(e, 'carrera')}
                  className="border p-2 w-full mb-2 rounded"
                />
                <input
                  type="number"
                  placeholder="Semestre"
                  value={newStudent?.semestre}
                  onChange={(e) => handleInputChange(e, 'semestre')}
                  className="border p-2 w-full mb-2 rounded"
                />
              </div>
              <div className="flex justify-end mt-4">
                <button onClick={handleModalEdit} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                  {editingId ? 'Actualizar' : 'Guardar'}
                </button>
                <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Nombre</th>
                <th className="py-2 px-4 border-b">Apellido</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Teléfono</th>
                <th className="py-2 px-4 border-b">Dirección</th>
                <th className="py-2 px-4 border-b">Fecha Nac.</th>
                <th className="py-2 px-4 border-b">Carrera</th>
                <th className="py-2 px-4 border-b">Semestre</th>
                <th className="py-2 px-4 border-b">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id}>
                  <td className="py-2 px-4 border-b">{student.nombre}</td>
                  <td className="py-2 px-4 border-b">{student.apellido}</td>
                  <td className="py-2 px-4 border-b">{student.email}</td>
                  <td className="py-2 px-4 border-b">{student.telefono}</td>
                  <td className="py-2 px-4 border-b">{student.direccion}</td>
                  <td className="py-2 px-4 border-b">{student.fecha_nacimiento}</td>
                  <td className="py-2 px-4 border-b">{student.carrera}</td>
                  <td className="py-2 px-4 border-b">{student.semestre}</td>
                  <td className="py-2 px-4 border-b">
                    <button onClick={() => handleEdit(student)} className="mr-2 text-blue-500 hover:text-blue-700">
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button onClick={() => handleDelete(student.id)} className="text-red-500 hover:text-red-700">
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default EstudianteL;



function UsersIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  
  function HomeIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    );
  }
  
  export {
    HomeIcon,
    UsersIcon,
  };