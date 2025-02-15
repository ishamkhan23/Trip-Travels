export const renderGroupPlanner = () => {
    const app = document.getElementById("app");
    let groups = [];

    const createGroup = (groupName) => {
        groups.push({ name: groupName, data: [] });
        render();
    };

    const addRowToGroup = (index, newRow) => {
        groups[index].data.push(newRow);
        render();
    };

    const render = () => {
        app.innerHTML = `
            <div class="min-h-screen bg-gradient-to-br from-blue-300 via-indigo-400 to-purple-500 flex flex-col items-center p-6">
                <h1 class="text-4xl font-bold text-white mb-6">Plan Your Trip</h1>
                <div class="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
                    <div class="mb-6">
                        <h2 class="text-2xl font-bold text-gray-800 mb-4">Create or Join a Group</h2>
                        <div class="flex gap-4">
                            <input id="groupName" type="text" class="border border-gray-300 rounded-lg p-2 flex-grow" placeholder="Enter group name" />
                            <button class="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition" onclick="createGroup(document.getElementById('groupName').value)">Create</button>
                        </div>
                    </div>
                    ${groups.map((group, index) => `
                        <div class="mb-4">
                            <h3 class="text-xl font-bold text-gray-800">${group.name}</h3>
                            <table class="w-full border-collapse border border-gray-200 mt-2">
                                <thead>
                                    <tr>
                                        <th class="border border-gray-200 p-2">Spot</th>
                                        <th class="border border-gray-200 p-2">Time</th>
                                        <th class="border border-gray-200 p-2">Location</th>
                                        <th class="border border-gray-200 p-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${group.data.map(row => `
                                        <tr>
                                            <td class="border border-gray-200 p-2">${row.spot}</td>
                                            <td class="border border-gray-200 p-2">${row.time}</td>
                                            <td class="border border-gray-200 p-2">${row.location}</td>
                                        </tr>
                                    `).join('')}
                                    <tr>
                                        <td class="border border-gray-200 p-2"><input id="spot-${index}" class="w-full" /></td>
                                        <td class="border border-gray-200 p-2"><input id="time-${index}" class="w-full" /></td>
                                        <td class="border border-gray-200 p-2"><input id="location-${index}" class="w-full" /></td>
                                        <td class="border border-gray-200 p-2">
                                            <button class="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition" onclick="addRowToGroup(${index}, {
                                                spot: document.getElementById('spot-${index}').value,
                                                time: document.getElementById('time-${index}').value,
                                                location: document.getElementById('location-${index}').value
                                            })">Add</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    };

    render();
};
console.log('GroupPlanner loaded!');
