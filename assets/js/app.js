project = document.getElementById('project');
async function getProjects() {
    const data = await fetch('http://127.0.0.1:5500/assets/js/projects.json');
    const obj = await data.json()
    for (let i = 0; i < obj.length; i++) {
        const element = obj[i];
        project.innerHTML += `
        <table>
            <tbody>
                <tr>
                    <td class="project-details pop">
                        <a class="project-link" href="${element.link}" target="_blank">
                            <p>${element.description} <iconify-icon icon="iconoir:link" style="color: #503d5c;"></iconify-icon></p>
                        </a>
                        <div class="project-tags">
                            <p class="project-language">
                            ${element.tag}
                            </p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>        
    `
    }
}
getProjects();