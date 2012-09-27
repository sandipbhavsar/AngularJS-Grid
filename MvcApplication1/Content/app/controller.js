var GridController = function ($scope, global) {
    $scope.state = global;

    $scope.update = function () {
        //TODO : WEBAPI to update record.
        alert("Updated successfully.");
    }

    $scope.AddNewRow = function () {
        var rows = $scope.state.rows;
        rows.push(AddItem());
        $scope.state.rows = rows;
        //TODO : WEBAPI to Add record.
    }

    $scope.DeleteRow = function () {
        var deleterows = $scope.state.deletedrows;
        alert(JSON.stringify(deleterows));
        alert("Deleted.");
        var rows = $scope.state.rows;
    }

    $scope.RemoveClick = function () {
        alert("hi");
    };

    var AddItem = function () {
        return { id: Math.round(Math.random() * 10000) };
    };
}

myApp.factory('global', function ($rootScope) {

    var state = {};

    state.columns = [
                    {
                        id: "id",
                        name: "Id",
                        field: "id",
                        width: 20,
                        cssClass: "cell-title"
                    },
                    {
                        id: "title",
                        name: "Title",
                        field: "title",
                        width: 200,
                        cssClass: "cell-title",
                        editor: Slick.Editors.Text
                    },
                    {
                        id: "desc",
                        name: "Description",
                        field: "description",
                        width: 200,
                        editor: Slick.Editors.LongText
                    },
                    {
                        id: "duration",
                        name: "Duration",
                        field: "duration",
                        editor: Slick.Editors.Text
                    }
    ];

    state.options = {
        editable: true,
        enableAddRow: false,
        enableCellNavigation: true,
        asyncEditorLoading: false,
        autoEdit: false
    };

    state.rows = [{
        "id": 1,
        "title": "Row 1",
        "description": "Initial Data",
        "duration": "3.14159",
        "percentComplete": "75"
    }, {
        "id": 2,
        "title": "Row 1",
        "description": "Initial Data",
        "duration": "3.14159",
        "percentComplete": "75"
    },
    {
        "id": 3,
        "title": "Row 1",
        "description": "Initial Data",
        "duration": "3.14159",
        "percentComplete": "75"
    },
    {
        "id": 4,
        "title": "Row 1",
        "description": "Initial Data",
        "duration": "3.14159",
        "percentComplete": "75"
    }];

    return state;
});