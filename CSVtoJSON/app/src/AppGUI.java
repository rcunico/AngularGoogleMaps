import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.layout.BorderPane;
import javafx.stage.Stage;

public class AppGUI extends Application
{

    @Override
    public void start(Stage primaryStage) throws Exception
    {
        BorderPane root = FXMLLoader.load(getClass().getResource("App.fxml"));
        Scene scene = new Scene(root);
        primaryStage.setScene(scene);
        primaryStage.setTitle("CSV to JSON Converter");
        primaryStage.show();
    }

    public static void main(String[] args)
    {
        launch(args);
    }
}
