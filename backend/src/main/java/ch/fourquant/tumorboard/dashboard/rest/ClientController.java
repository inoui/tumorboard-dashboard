package ch.fourquant.tumorboard.dashboard.rest;

import ch.fourquant.tumorboard.dashboard.domain.Client;
import ch.fourquant.tumorboard.dashboard.persistence.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/clients")
public class ClientController extends DashboardRestController<Client> {

    @Autowired
    private ClientRepository repository;

    @Override
    public CrudRepository<Client, Long> getRepository() {
        return repository;
    }

}
