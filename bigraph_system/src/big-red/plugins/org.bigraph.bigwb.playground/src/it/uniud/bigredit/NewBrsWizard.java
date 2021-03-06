package it.uniud.bigredit;

import it.uniud.bigredit.model.BRS;
import it.uniud.bigredit.model.load_save.savers.BRSXMLSaver;
import it.uniud.bigredit.utils.RcpUtils;

import org.bigraph.model.Signature;
import org.bigraph.model.loaders.LoadFailedException;
import org.bigraph.model.savers.SaveFailedException;
import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.wizard.Wizard;
import org.eclipse.ui.INewWizard;
import org.eclipse.ui.IWorkbench;

import dk.itu.big_red.utilities.io.IOAdapter;
import dk.itu.big_red.utilities.resources.EclipseFileWrapper;
import dk.itu.big_red.utilities.ui.UI;



public class NewBrsWizard  extends Wizard implements INewWizard {
	private NewBrsWizardPage page = null;
	
	@Override
	public boolean performFinish() {
		IContainer c =
				RcpUtils.findContainerByPath(null, page.getFolderPath());
			if (c != null) {
				try {
					IFile sigFile =
						RcpUtils.findFileByPath(null, page.getSignaturePath());
					IFile bigFile = RcpUtils.getFile(c, page.getFileName());
					NewBrsWizard.createBigraph(sigFile, bigFile);
					UI.openInEditor(bigFile);
					return true;
				} catch (CoreException e) {
					page.setErrorMessage(e.getLocalizedMessage());
				} catch (LoadFailedException e) {
					page.setErrorMessage(e.getLocalizedMessage());
				} catch (SaveFailedException e) {
					page.setErrorMessage(e.getLocalizedMessage());
				}
			}
			return false;
	}

	@Override
	public void init(IWorkbench workbench, IStructuredSelection selection) {
		page = new NewBrsWizardPage("newBrsWizardPage", selection);
		
		page.setTitle("BRS");
		page.setDescription("Create a new brs");
		
		addPage(page);
	}
	

	protected static void createBigraph(IFile sigFile, IFile bigFile)
			throws LoadFailedException, SaveFailedException, CoreException {
		IOAdapter io = new IOAdapter();
		BRS b = new BRS();
		
		b.setSignature((Signature)new EclipseFileWrapper(sigFile).load());
		BRSXMLSaver r = new BRSXMLSaver();
		r.setFile(new EclipseFileWrapper(bigFile)).setModel(b).
			setOutputStream(io.getOutputStream()).exportObject();
		bigFile.setContents(io.getInputStream(), 0, null);
	}
	
	

	
	
	
}
