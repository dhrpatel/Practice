(function() {


  angular
    .module('myApp')
    .controller('ProjectController', ProjectController);


  ProjectController.$inject = ['$state', '$stateParams', 'Project'];

  function ProjectController($state, $stateParams, Project) {

    var projectController = this;

    projectController.projects = Project.query(); // fetches all projects via GET  to /api/Project/

    projectController.deleteProject = function() { // deletes a project via DELETE to /api/Project/:id/

      projectController.project.$delete(function() {
        $state.go('projects'); // redirect to projects list page
      });

    };

    if($state.current.name == 'newProject') {
      projectController.project = new Project(); // create new project instance
    }
    projectController.addProject = function() {
      projectController.project.$save(function() {
        $state.go('projects'); // redirect to projects list page
      });

    };


    projectController.updateProject = function() { // update the edited project via a PUT to /api/Project/:id/
      projectController.project.$update(function() {
        $state.go('projects'); // redirect to projects list page
      })
    };


    projectController.loadProject = function() { 

      for (var i = 0, len = projectController.projects.length; i < len; i++) {
        if (projectController.projects[i].id == $stateParams.pId) {
          projectController.project = projectController.projects[i];
          return false;
        }
      }

      // projectController.project = Project.get({ id: $stateParams.pId }); // load a project via a GET to /api/Project/:id/
    };

    /** Only load a specific project if a pId is passed */
    if($stateParams.pId) {
      projectController.projects.$promise.then(function() {
        projectController.loadProject();
      });
    }

  };

})();
