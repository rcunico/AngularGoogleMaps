import com.sun.xml.internal.ws.util.StringUtils;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.stage.FileChooser;
import javafx.stage.Stage;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class AppController
{
    @FXML Label errorLabel;
    @FXML TextField textFieldCSV;
    @FXML TextField textFieldJSON;
    @FXML Button convertButton;

    private File csvFile;
    private File jsonFile;
    private ArrayList<String> converted;

    public AppController()
    {
        csvFile = null;
        jsonFile = null;
        converted = new ArrayList<>();
    }

    public void handleCSV(ActionEvent event)
    {
        FileChooser fileChooser = new FileChooser();
        fileChooser.getExtensionFilters().add(
                new FileChooser.ExtensionFilter("CSV Files", "*.csv")
        );
        csvFile = fileChooser.showOpenDialog(new Stage());
        if (csvFile != null)
        {
            textFieldCSV.setText(csvFile.getName());
            if (jsonFile != null)
            {
                convertButton.setDisable(false);
            }
        }
        System.out.println(csvFile.getName());
    }

    public void handleJSON(ActionEvent event)
    {
        FileChooser fileChooser = new FileChooser();
        fileChooser.getExtensionFilters().add(
                new FileChooser.ExtensionFilter("JSON Files", "*.json")
        );
        jsonFile = fileChooser.showSaveDialog(new Stage());
        if (jsonFile != null)
        {
            textFieldJSON.setText(jsonFile.getName());
            if (csvFile != null)
            {
                convertButton.setDisable(false);
            }
        }
        System.out.println(jsonFile.getName());
    }

    public void handleConvert(ActionEvent event)
    {
        try
        {
            convertToJSON();
            writeToJSON();
            errorLabel.setText("Conversion and write successful");
        }
        catch (Exception e)
        {
            errorLabel.setText(e.getMessage());
        }
    }

    private void convertToJSON() throws Exception
    {
        Scanner scanner = null;
        try
        {
            FileReader reader = new FileReader(csvFile);
            scanner = new Scanner(reader);
            int count = 0; // Used for header line
            boolean isData = false;
            ArrayList<String> attributesList = new ArrayList<>();

            //
            if (scanner.hasNextLine())
            {
                converted.add("[");
                isData = true;
            }

            while (scanner.hasNextLine())
            {

                if (count == 0)
                {
                    String[] line = scanner.nextLine().split(",");
                    for (int index = 0; index < line.length; index++)
                    {
                        attributesList.add(line[index]);
                    }

                    System.out.println(Arrays.toString(line));
                }
                else
                {
                    converted.add("  {");
                    String[] line = scanner.nextLine().split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)", -1);
                    for (int index = 0; index < line.length; index++)
                    {
                        String printedLine = "";
                        if (isNumeric(line[index]))
                        {
                            printedLine += "    \"" + attributesList.get(index) + "\": " + line[index];
                        }
                        else
                        {
                            String temp = line[index];
                            if (temp.length() > 1)
                            {
                                if (temp.charAt(0) == '\"' && temp.charAt(temp.length() - 1) == '\"')
                                {
                                    temp = temp.replace("\"", "");
                                }
                            }

                            printedLine += "    \"" + attributesList.get(index) + "\": \"" + temp + "\"";
                        }

                        if (index < line.length - 1) printedLine += ",";

                        converted.add(printedLine);
                    }
                }

                if (count !=0 && scanner.hasNextLine())
                {
                    converted.add("  },");
                }
                else if (count !=0 && !scanner.hasNextLine())
                {
                    converted.add("  }");
                }

                count++;
            }

            //
            if (isData)
            {
                converted.add("]");
            }
        } catch (FileNotFoundException e)
        {
            throw new Exception("Error converting CSV to JSON. Please check CSV file.");
        }
        finally
        {
            scanner.close();
        }
    }

    private void writeToJSON() throws Exception
    {
        PrintWriter writer = null;
        try
        {
            writer = new PrintWriter(jsonFile);
            for (String line : converted)
            {
                writer.println(line);
            }
        }
        catch (FileNotFoundException e)
        {
            throw new Exception("Error writing to JSON file.");
        }
        finally
        {
            writer.close();
        }
    }

    public boolean isNumeric(String value)
    {
        try
        {
            Double.parseDouble(value);
            return true;
        }
        catch (NumberFormatException e)
        {
            return false;
        }
    }
}
