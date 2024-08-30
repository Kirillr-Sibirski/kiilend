import React from 'react';

const CustomAlert = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-start justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-[#c484f1] bg-opacity-90 text-[#100d28] p-6 rounded-lg shadow-lg max-w-sm w-full mt-10">
                <p className="mb-6 text-center">{message}</p>
                <div className="flex justify-center">
                    <button
                        onClick={onClose}
                        className="bg-[#c484f1] hover:bg-[#100d28] text-black font-bold py-2 px-4 rounded"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomAlert;
