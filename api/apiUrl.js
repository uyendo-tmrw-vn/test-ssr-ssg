export const ApiUrl = {
    home: '/items/projects?filter[status][_eq]=published&&filter[feature][_eq]=true&fields=id,name,slug,description,location,hide_all_work,showreel_review,main_photo.id,main_photo.type,client.id,client.name&sort=+sort',
    project: '/items/projects?filter[status][_eq]=published&fields=id,name,slug,description,location,hide_all_work,main_photo.id,photos.*,main_photo.type,client.id,client.name&sort=+sort',
    works: '/items/projects?filter[status][_eq]=published&filter[hide_all_work][_eq]=false&fields=id,name,slug,location,description,all_work,main_photo.id,main_photo.type,work_photo.id,work_photo.type,client.id,client.name&sort=client.sort,+sort',
    about: '/items/about?fields=banner,title,description,banner_mobile',
    awards: '/items/awards?filter[status][_eq]=published&fields=id,name,description,link,image&sort=+sort',
    contact: '/items/contacts',
    config: '/items/config',
}

export function ApiUrlProjectDetail(projectId) {
    return `/items/projects/` + projectId + `?filter[status][_eq]=published&fields=id,name,slug,description,location, main_photo.id,main_photo.type, client.id,client.name,photos.*`
}


