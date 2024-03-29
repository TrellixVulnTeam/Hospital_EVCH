import React from 'react'


export default function AddRDV() {
    return (
        <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Patient Informations</h3>
                        <p className="mt-1 text-sm text-gray-600">Add your new patient to the database</p>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                            CIN
                                        </label>
                                        <input
                                            type="text"
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="mt-1 block w-full py-2 px-3 border  border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="Nature" className="block text-sm font-medium text-gray-700">
                                            Nature du rendez-vous
                                        </label>
                                        <select
                                            id="Nature"
                                            name="Nature"
                                            autoComplete="Nature-name"
                                            className="mt-1 block w-[50%] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option>Neuro-chirurgie</option>
                                            <option>Cardiologie</option>
                                            
                                        </select>
                                    </div>
                                    <div className="col-span-6">
                                        <label htmlFor="Prestation" className="block text-sm font-medium text-gray-700">
                                            Prestation
                                        </label>
                                        <select
                                            id="Prestation"
                                            name="Prestation"
                                            autoComplete="Prestation-name"
                                            className="mt-1 block w-[50%] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option>Neuro-chirurgie</option>
                                            <option>Cardiologie</option>
                                            <option>Chirurgie Infantile /Pédiatrique</option>
                                            <option>Chirurgie réparatrice et plastique</option>
                                            <option>Endocrinologie</option>
                                            <option>Chirurgie générale</option>
                                            <option>Gynéco-Obstétrique</option>
                                            <option>Neurologie</option>
                                            <option>Diététique</option>
                                            <option>Rhumatologie</option>
                                            <option>Néphrologie</option>
                                            <option>Dermatologie</option>
                                        </select>
                                    </div>
                                   
                                        <input type="date" name="" id=""  className="mt-1  block w-full py-2 px-3 border  border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    

                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white sm:bg-[#193152] hover:bg-[#0f1e33] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
