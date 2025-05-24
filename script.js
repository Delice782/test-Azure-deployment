
const locationData = {
    kigali: {
        gasabo: ['Bumbogo', 'Gatsata', 'Gikomero', 'Gisozi', 'Jabana', 'Jali', 'Kacyiru', 'Kimihurura', 'Kimiromko', 'Kinyinya', 'Ndera', 'Nduba', 'Remera', 'Rusororo', 'Rutunga'],
        kicukiro: ['Gahanga', 'Gatenga', 'Gikondo', 'Kagarama', 'Kanombe', 'Kicukiro', 'Kigarama', 'Masaka', 'Niboye', 'Nyarugunga'],
        nyarugenge: ['Gitega', 'Kanyinya', 'Kigali', 'Kimisagara', 'Mageragere', 'Muhima', 'Nyakabanda', 'Nyamirambo', 'Nyarugenge', 'Rwezamenyo']
    },
    north: {
        burera: ['Bungwe', 'Butaro', 'Cyanika', 'Cyeru', 'Gahunga', 'Gatebe', 'Gitovu', 'Kagogo', 'Kinoni', 'Kinyababa', 'Kivuye', 'Nemba', 'Rugarama', 'Rugengabari', 'Ruhunde', 'Rusarabuye', 'Rwerere'],
        gakenke: ['Busengo', 'Coko', 'Cyabingo', 'Gakenke', 'Gashenyi', 'Janja', 'Kamubuga', 'Karambo', 'Kivuruga', 'Mataba', 'Minazi', 'Mugunga', 'Muhondo', 'Muyongwe', 'Muzo', 'Nemba', 'Ruli', 'Rusasa', 'Rushashi'],
        gicumbi: ['Bukure', 'Bwisige', 'Byumba', 'Cyumba', 'Giti', 'Kageyo', 'Kaniga', 'Manyagiro', 'Miyove', 'Mukarange', 'Muko', 'Mutete', 'Nyamiyaga', 'Nyankenke', 'Rubaya', 'Rukomo', 'Rushaki', 'Rutare', 'Ruvune', 'Rwamiko', 'Shangasha'],
        musanze: ['Busogo', 'Cyuve', 'Gacaca', 'Gashaki', 'Gataraga', 'Kimonyi', 'Kinigi', 'Muhoza', 'Muko', 'Musanze', 'Nkotsi', 'Nyange', 'Remera', 'Rwaza', 'Shingiro'],
        rulindo: ['Base', 'Burega', 'Bushoki', 'Buyoga', 'Cyinzuzi', 'Cyungo', 'Kinihira', 'Kisaro', 'Masoro', 'Mbogo', 'Murambi', 'Ngoma', 'Ntarabana', 'Rukozo', 'Rusiga', 'Shyorongi', 'Tumba']
    },
    south: {
        gisagara: ['Gikonko', 'Gishubi', 'Kansi', 'Kibirizi', 'Kigembe', 'Mamba', 'Muganza', 'Mugombwa', 'Mukingo', 'Musha', 'Ndora', 'Nyanza', 'Save'],
        huye: ['Gishamvu', 'Huye', 'Karama', 'Kigoma', 'Kinazi', 'Maraba', 'Mbazi', 'Mukura', 'Ngoma', 'Ruhashya', 'Rusatira', 'Rwaniro', 'Simbi', 'Tumba'],
        kamonyi: ['Gacurabwenge', 'Karama', 'Kayenzi', 'Kayumbu', 'Mugina', 'Musambira', 'Ngamba', 'Nyamiyaga', 'Nyarubaka', 'Rugarika', 'Rukoma', 'Runda'],
        muhanga: ['Cyeza', 'Kabacuzi', 'Kibangu', 'Kiyumba', 'Muhanga', 'Mushishiro', 'Nyabinoni', 'Nyamabuye', 'Nyarusange', 'Rongi', 'Rugendabari', 'Shyogwe'],
        nyamagabe: ['Buruhukiro', 'Cyanika', 'Gasaka', 'Gatare', 'Kaduha', 'Kamegeri', 'Kibirizi', 'Kibumbwe', 'Kitabi', 'Mbazi', 'Mugano', 'Musange', 'Musebeya', 'Mushubi', 'Nkomane', 'Tare', 'Uwinkingi'],
        nyanza: ['Busasamana', 'Busoro', 'Cyabakamyi', 'Kibirizi', 'Kigoma', 'Mukingo', 'Muyira', 'Ntyazo', 'Nyagisozi', 'Rwabicuma'],
        nyaruguru: ['Busanze', 'Cyahinda', 'Kibeho', 'Kivu', 'Mata', 'Muganza', 'Munini', 'Ngera', 'Ngoma', 'Nyabimata', 'Nyagisozi', 'Ruheru', 'Ruramba', 'Rusenge'],
        ruhango: ['Bweramana', 'Byimana', 'Kabagali', 'Kinazi', 'Kinihira', 'Mbuye', 'Mwendo', 'Ntongwe', 'Ruhango']
    },
    east: {
        bugesera: ['Gashora', 'Juru', 'Kamabuye', 'Mareba', 'Mayange', 'Musenyi', 'Mwogo', 'Ngeruka', 'Ntarama', 'Nyamata', 'Nyarugenge', 'Rilima', 'Ruhuha', 'Rweru', 'Shyara'],
        gatsibo: ['Gasange', 'Gatsibo', 'Gitoki', 'Kabarore', 'Kageyo', 'Kiramuruzi', 'Kiziguro', 'Muhura', 'Murambi', 'Ngarama', 'Nyagihanga', 'Remera', 'Rugarama', 'Rwimbogo'],
        kayonza: ['Gahini', 'Kabare', 'Kabarondo', 'Mukarange', 'Murama', 'Murundi', 'Mwiri', 'Ndego', 'Nyamirama', 'Rukara', 'Ruramira', 'Rwinkwavu'],
        kirehe: ['Gahara', 'Gatore', 'Kigarama', 'Kigina', 'Kirehe', 'Mahama', 'Mpanga', 'Musaza', 'Mushikiri', 'Nasho', 'Nyamugari', 'Nyarubuye'],
        ngoma: ['Gashanda', 'Jarama', 'Karembo', 'Kazo', 'Kibungo', 'Mugesera', 'Murama', 'Mutenderi', 'Remera', 'Rukira', 'Rukumberi', 'Rurenge', 'Sake', 'Zaza'],
        nyagatare: ['Gatunda', 'Karama', 'Karangazi', 'Katabagemu', 'Kiyombe', 'Matimba', 'Mimuri', 'Mukama', 'Musheri', 'Nyagatare', 'Rukomo', 'Rwempasha', 'Rwimiyaga', 'Tabagwe'],
        rwamagana: ['Fumbwe', 'Gahengeri', 'Gishali', 'Karenge', 'Kigabiro', 'Muhazi', 'Munyaga', 'Munyiginya', 'Musha', 'Muyumbu', 'Mwulire', 'Nyakaliro', 'Nzige', 'Rubona']
    },
    west: {
        karongi: ['Bwishyura', 'Gishari', 'Gishyita', 'Gitesi', 'Mubuga', 'Murambi', 'Murundi', 'Mutuntu', 'Rubengera', 'Rugabano', 'Ruganda', 'Rwankuba', 'Twumba'],
        ngororero: ['Bwira', 'Gatumba', 'Hindiro', 'Kabaya', 'Kageyo', 'Kavumu', 'Matyazo', 'Muhanda', 'Muhororo', 'Ndaro', 'Ngororero', 'Nyange', 'Sovu'],
        nyabihu: ['Bigogwe', 'Jenda', 'Jomba', 'Kabatwa', 'Karago', 'Kintobo', 'Mukamira', 'Muringa', 'Rambura', 'Rugera', 'Rurembo', 'Shyira'],
        nyamasheke: ['Bushekeri', 'Bushenge', 'Cyato', 'Gihombo', 'Kagano', 'Kanjongo', 'Karambi', 'Karengera', 'Kirimbi', 'Macuba', 'Mahembe', 'Nyabitekeri', 'Rangiro', 'Ruharambuga', 'Shangi'],
        rubavu: ['Bugeshi', 'Busasamana', 'Cyanzarwe', 'Gisenyi', 'Kanama', 'Kanzenze', 'Mudende', 'Nyakiriba', 'Nyamyumba', 'Nyundo', 'Rubavu', 'Rugerero'],
        rusizi: ['Bugarama', 'Butare', 'Bweyeye', 'Gashonga', 'Giheke', 'Gihundwe', 'Gikundamvura', 'Gitambi', 'Kamembe', 'Muganza', 'Mururu', 'Nkanka', 'Nkombo', 'Nkungu', 'Nyakabuye', 'Nyakarenzo', 'Nzahaha', 'Rwimbogo'],
        rutsiro: ['Boneza', 'Gihango', 'Kigeyo', 'Kivumu', 'Manihira', 'Mukura', 'Murunda', 'Musasa', 'Mushonyi', 'Mushubati', 'Nyabirasi', 'Ruhango', 'Rusebeya']
    }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    setupLocationDropdowns('location');
    setupLocationDropdowns('search');
    setupContributeForm();
    setupSearchForm();
    addDataManagementButtons();
    displayDataStats();
});

// Add export/import buttons to pages
function addDataManagementButtons() {
    // Add to contribute page
    const contributeContainer = document.querySelector('.content-container');
    if (contributeContainer && document.getElementById('resource-form')) {
        const dataManagement = document.createElement('div');
        dataManagement.className = 'data-management';
        dataManagement.innerHTML = `
            <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
                <h3 style="margin-bottom: 1rem; color: #374151;">Data Management</h3>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <button id="export-data" class="btn btn-blue">📥 Export All Data</button>
                    <button id="import-data" class="btn btn-green">📤 Import Data</button>
                    <button id="clear-data" class="btn" style="background: #dc2626;">🗑️ Clear All Data</button>
                </div>
                <input type="file" id="file-input" accept=".json" style="display: none;">
                <div id="data-stats" style="margin-top: 1rem; font-size: 0.9rem; color: #6b7280;"></div>
            </div>
        `;
        contributeContainer.appendChild(dataManagement);
    }

    // Add to search page
    const searchContainer = document.querySelector('.content-container');
    if (searchContainer && document.getElementById('search-form')) {
        const dataInfo = document.createElement('div');
        dataInfo.innerHTML = `
            <div style="background: #e0eaff; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                    <div id="search-data-stats" style="font-size: 0.9rem; color: #1e40af;"></div>
                    <div>
                        <button id="search-export-data" class="btn btn-blue" style="padding: 0.5rem 1rem; font-size: 0.9rem;">📥 Export Data</button>
                        <button id="search-import-data" class="btn btn-green" style="padding: 0.5rem 1rem; font-size: 0.9rem;">📤 Import Data</button>
                    </div>
                </div>
                <input type="file" id="search-file-input" accept=".json" style="display: none;">
            </div>
        `;
        searchContainer.insertBefore(dataInfo, searchContainer.firstChild);
    }

    // Setup event listeners
    setupDataManagementEvents();
}

// Setup event listeners for data management
function setupDataManagementEvents() {
    // Export buttons
    document.getElementById('export-data')?.addEventListener('click', exportData);
    document.getElementById('search-export-data')?.addEventListener('click', exportData);

    // Import buttons
    document.getElementById('import-data')?.addEventListener('click', () => {
        document.getElementById('file-input').click();
    });
    document.getElementById('search-import-data')?.addEventListener('click', () => {
        document.getElementById('search-file-input').click();
    });

    // File inputs
    document.getElementById('file-input')?.addEventListener('change', importData);
    document.getElementById('search-file-input')?.addEventListener('change', importData);

    // Clear data button
    document.getElementById('clear-data')?.addEventListener('click', clearAllData);
}

// Export data to JSON file
function exportData() {
    const resources = JSON.parse(localStorage.getItem('community-resources')) || [];

    const exportData = {
        resources: resources,
        exportDate: new Date().toISOString(),
        version: '1.0',
        totalResources: resources.length
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `myvillagemap-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    alert(`✅ Data exported successfully! ${resources.length} resources saved to file.`);
}

// Import data from JSON file
function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const importedData = JSON.parse(e.target.result);

            // Validate imported data
            if (!importedData.resources || !Array.isArray(importedData.resources)) {
                alert('❌ Invalid file format. Please select a valid MyVillageMap data file.');
                return;
            }

            // Get current resources
            const currentResources = JSON.parse(localStorage.getItem('community-resources')) || [];

            // Ask user about merge or replace
            const mergeChoice = confirm(
                `📊 Import Options:\n\n` +
                `Current data: ${currentResources.length} resources\n` +
                `Import data: ${importedData.resources.length} resources\n\n` +
                `Click OK to MERGE (add new resources)\n` +
                `Click Cancel to REPLACE (overwrite all data)`
            );

            let finalResources;
            if (mergeChoice) {
                // Merge data (avoid duplicates based on name and location)
                const merged = [...currentResources];
                let addedCount = 0;

                importedData.resources.forEach(newResource => {
                    const exists = merged.some(existing =>
                        existing.name.toLowerCase() === newResource.name.toLowerCase() &&
                        existing.province === newResource.province &&
                        existing.district === newResource.district &&
                        existing.sector === newResource.sector
                    );

                    if (!exists) {
                        merged.push(newResource);
                        addedCount++;
                    }
                });

                finalResources = merged;
                alert(`✅ Data merged successfully!\n${addedCount} new resources added.\nTotal resources: ${finalResources.length}`);
            } else {
                // Replace data
                finalResources = importedData.resources;
                alert(`✅ Data replaced successfully!\n${finalResources.length} resources imported.`);
            }

            // Save to localStorage
            localStorage.setItem('community-resources', JSON.stringify(finalResources));

            // Update stats display
            displayDataStats();

            // Clear file input
            event.target.value = '';

        } catch (error) {
            alert('❌ Error reading file. Please make sure it\'s a valid JSON file.');
            console.error('Import error:', error);
        }
    };

    reader.readAsText(file);
}

// Clear all data
function clearAllData() {
    const resources = JSON.parse(localStorage.getItem('community-resources')) || [];

    if (resources.length === 0) {
        alert('ℹ️ No data to clear.');
        return;
    }

    const confirmed = confirm(
        `⚠️ Warning: This will permanently delete ALL ${resources.length} resources!\n\n` +
        `This action cannot be undone. Are you sure you want to continue?`
    );

    if (confirmed) {
        localStorage.removeItem('community-resources');
        alert('✅ All data has been cleared.');
        displayDataStats();
    }
}

// Display data statistics
function displayDataStats() {
    const resources = JSON.parse(localStorage.getItem('community-resources')) || [];

    // Count by category
    const categoryStats = {};
    resources.forEach(resource => {
        categoryStats[resource.category] = (categoryStats[resource.category] || 0) + 1;
    });

    const statsText = resources.length === 0
        ? 'No resources stored locally'
        : `${resources.length} resources stored locally`;

    // Update stats in contribute page
    const dataStats = document.getElementById('data-stats');
    if (dataStats) {
        if (resources.length > 0) {
            const categoryList = Object.entries(categoryStats)
                .map(([category, count]) => `${category}: ${count}`)
                .join(', ');
            dataStats.innerHTML = `${statsText}<br><small>${categoryList}</small>`;
        } else {
            dataStats.innerHTML = statsText;
        }
    }

    // Update stats in search page
    const searchStats = document.getElementById('search-data-stats');
    if (searchStats) {
        searchStats.innerHTML = statsText;
    }
}

// Populate cascading dropdowns
function setupLocationDropdowns(prefix) {
    const provinceSelect = document.getElementById(`${prefix}-province`);
    const districtSelect = document.getElementById(`${prefix}-district`);
    const sectorSelect = document.getElementById(`${prefix}-sector`);

    if (!provinceSelect || !districtSelect || !sectorSelect) return;

    provinceSelect.addEventListener('change', () => {
        const province = provinceSelect.value;
        districtSelect.innerHTML = '<option value="">-- Select District --</option>';
        sectorSelect.innerHTML = '<option value="">-- Select Sector --</option>';

        if (province && locationData[province]) {
            for (const district in locationData[province]) {
                const option = document.createElement('option');
                option.value = district;
                option.textContent = capitalizeFirstLetter(district);
                districtSelect.appendChild(option);
            }
        }
    });

    districtSelect.addEventListener('change', () => {
        const province = provinceSelect.value;
        const district = districtSelect.value;
        sectorSelect.innerHTML = '<option value="">-- Select Sector --</option>';

        if (province && district && locationData[province] && locationData[province][district]) {
            locationData[province][district].forEach(sector => {
                const option = document.createElement('option');
                option.value = sector;
                option.textContent = sector;
                sectorSelect.appendChild(option);
            });
        }
    });
}

// Set up contribute form submission
function setupContributeForm() {
    const form = document.getElementById('resource-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect form data
        const data = {
            name: document.getElementById('resource-name').value.trim(),
            category: document.getElementById('category').value,
            province: document.getElementById('location-province').value,
            provinceName: getSelectedText('location-province'),
            district: document.getElementById('location-district').value,
            districtName: getSelectedText('location-district'),
            sector: document.getElementById('location-sector').value,
            description: document.getElementById('description').value.trim(),
            timestamp: new Date().toISOString()
        };

        // Validate required fields
        if (!data.name || !data.category || !data.province || !data.district || !data.sector) {
            alert('Please fill out all required fields.');
            return;
        }

        // Check for duplicates
        const resources = JSON.parse(localStorage.getItem('community-resources')) || [];
        const duplicate = resources.some(resource =>
            resource.name.toLowerCase() === data.name.toLowerCase() &&
            resource.province === data.province &&
            resource.district === data.district &&
            resource.sector === data.sector
        );

        if (duplicate) {
            const confirmed = confirm(
                '⚠️ A similar resource already exists in this location.\n\n' +
                'Do you want to add it anyway?'
            );
            if (!confirmed) return;
        }

        // Store in local storage
        resources.push(data);
        localStorage.setItem('community-resources', JSON.stringify(resources));

        // Success message and reset form
        alert('✅ Thank you for contributing! Your resource has been added to the directory.');
        form.reset();

        // Update stats
        displayDataStats();
    });
}

// Set up search form submission
function setupSearchForm() {
    const searchForm = document.getElementById('search-form');
    const searchResults = document.getElementById('search-results');

    if (!searchForm || !searchResults) return;

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect search criteria
        const criteria = {
            category: document.getElementById('search-category').value,
            province: document.getElementById('search-province').value,
            district: document.getElementById('search-district').value,
            sector: document.getElementById('search-sector').value
        };

        // Get resources from local storage
        const resources = JSON.parse(localStorage.getItem('community-resources')) || [];

        // Filter resources based on criteria
        const filtered = resources.filter(resource => {
            return (!criteria.category || resource.category === criteria.category) &&
                (!criteria.province || resource.province === criteria.province) &&
                (!criteria.district || resource.district === criteria.district) &&
                (!criteria.sector || resource.sector === criteria.sector);
        });

        // Display results
        displaySearchResults(filtered, searchResults);
    });
}

// Display search results
function displaySearchResults(results, container) {
    container.innerHTML = '';

    if (results.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <p>No resources found matching your criteria. Try broadening your search or contribute a new resource.</p>
                <div style="margin-top: 1rem; padding: 1rem; background: #f3f4f6; border-radius: 8px;">
                    <p><strong>💡 Tips:</strong></p>
                    <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
                        <li>Try selecting fewer filters</li>
                        <li>Check if you have imported data from other devices</li>
                        <li>Contribute new resources to help your community</li>
                    </ul>
                </div>
            </div>
        `;
        return;
    }

    // Add results summary
    const summary = document.createElement('div');
    summary.style.cssText = 'margin-bottom: 1.5rem; padding: 1rem; background: #e0eaff; border-radius: 8px;';
    summary.innerHTML = `<p style="margin: 0; color: #1e40af;"><strong>Found ${results.length} resource${results.length === 1 ? '' : 's'}</strong></p>`;
    container.appendChild(summary);

    results.forEach(resource => {
        const card = document.createElement('div');
        card.className = 'card';

        let categoryIcon = getCategoryIcon(resource.category);

        card.innerHTML = `
            <h4>${resource.name} ${categoryIcon}</h4>
            <p><strong>Category:</strong> ${resource.category}</p>
            <p><strong>Location:</strong> ${resource.sector}, ${capitalizeFirstLetter(resource.district)}, ${getProvinceName(resource.province)}</p>
            <p>${resource.description}</p>
            ${resource.timestamp ? `<p style="font-size: 0.8rem; color: #6b7280; margin-top: 1rem;">Added: ${new Date(resource.timestamp).toLocaleDateString()}</p>` : ''}
        `;

        container.appendChild(card);
    });
}

// Helper functions
function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getSelectedText(elementId) {
    const select = document.getElementById(elementId);
    if (!select) return '';

    const selectedIndex = select.selectedIndex;
    if (selectedIndex === -1) return '';

    return select.options[selectedIndex].text;
}

function getProvinceName(provinceKey) {
    const provinceNames = {
        'kigali': 'Kigali City',
        'north': 'Northern Province',
        'south': 'Southern Province',
        'east': 'Eastern Province',
        'west': 'Western Province'
    };

    return provinceNames[provinceKey] || provinceKey;
}

function getCategoryIcon(category) {
    const icons = {
        'Clinic / Hospital': '🏥',
        'School / Library': '📚',
        'Bank / Mobile Money': '🏦',
        'Market / Food Supply': '🛒',
        'Water Access': '💧',
        'Community Center': '🏛️',
        'Public Transport': '🚌',
        'Government Office': '🏢'
    };

    return icons[category] || '';
}
