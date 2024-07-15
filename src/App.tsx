import { useState } from 'react';
import Table from './components/Table';
import Form from './components/Form';

export default function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <div className="min-h-screen bg-background text-neutral font-sans">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-primary mb-4">InfiniTable 🧬</h1>
          <p className="text-neutral text-xl leading-relaxed max-w-3xl mx-auto animate-fade-in">
            🚀 Seamlessly scroll through endless data with InfiniTable. Effortlessly manage and organize your information in a dynamic and intuitive way. 🔍
          </p>
        </header>

        <div className="bg-surface rounded-lg shadow-xl p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-primary">Data Entries</h2>
            <button
              onClick={() => setIsFormVisible(true)}
              className="px-4 py-2 bg-primary text-background rounded hover:bg-primary-dark transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              Add New Entry
            </button>
          </div>

          <div className="bg-background rounded-lg p-4" style={{ maxHeight: 'calc(60vh - 64px)', overflowY: 'auto' }}>
            <Table />
          </div>
        </div>

        <footer className="text-center mb-10">
          <div className="flex flex-wrap items-center justify-center">
            <a>Designed & built by </a>
            <div className="w-1" />
            <div className="flex">
              <a href="https://www.mutasim.top/"
                className="hover:underline hover:text-black dark:hover:text-white flex transition-all"
                target="_blank"
              >
                Mutasim
              </a>
            </div>
            <p className="mx-3 xs:block">|</p>
            <a href="https://github.com/mutasim77/infinite-table"
              className="hover:underline hover:text-black dark:hover:text-white flex transition-all"
              target="_blank"
            >
              Source code
              <div className="w-1.5" />
              <div className="w-4 bg-current rounded-full m-auto">
                <svg viewBox="0 0 24 24" className="fill-white dark:fill-black">
                  <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
                </svg>
              </div>
            </a>
          </div>
        </footer>
      </div>

      {isFormVisible && (
        <div className="fixed inset-0 bg-background bg-opacity-75 flex items-center justify-center animate-fade-in">
          <div className="bg-surface p-6 rounded-lg shadow-xl w-full max-w-md">
            <Form onClose={() => setIsFormVisible(false)} />
          </div>
        </div>
      )}
    </div>
  )
}