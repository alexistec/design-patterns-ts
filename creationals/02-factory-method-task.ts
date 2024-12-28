/**
 * !Description task
 * 1.Complete the SaleReport and InvertorryReport classes to implement
 * the Report interface, generating the content of each report in the generate method.
 * 
 * 2.Implement the SalesReportFactory and InventoryReportFactory classes 
 * to create instances of SalesReport and InventoryReport, respectively.
 * 
 * 3.Test the program by generating different types of reports using 
 * the promp to select the type of report.
 */

import { COLORS } from "../helpers/colors.ts";

interface Report {
    generate(): void;
}

class SalesReport implements Report {
    generate(): void {
      console.log('%cGenerating Sales Report....', COLORS.green);
    }
}


class InventoryReport implements Report {
    generate(): void {
      console.log('%cGenerating Inventory Report....', COLORS.orange);
    }
}


abstract class ReportFactory {
    protected abstract createReport(): Report;

    generateReport() {
        const report = this.createReport();
        report.generate();
    }
}

class SalesReportFactory extends ReportFactory {
    override createReport(): Report {
        return new SalesReport();
    }
}

class InventoryReportFactory extends ReportFactory {
    override createReport(): Report {
        return new InventoryReport();
    }
}

function main(){

    let reportFactory: ReportFactory;

    const reportType = prompt('What type  report do yo want?  (sales or inventory)');

    if (reportType === 'sales') {
        reportFactory = new SalesReportFactory();
    } else {
        reportFactory = new InventoryReportFactory();
    }
    
    reportFactory.generateReport();

}


main();